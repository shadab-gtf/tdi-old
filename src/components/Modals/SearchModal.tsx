"use client";

import React, {
  useCallback,
  useDeferredValue,
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, X, FolderSearch, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categories, getProjectHref, mockProjects } from "@/lib/projectsData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, searchQuery, setSearchQuery }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const inputRef = useRef<HTMLInputElement>(null);
  const deferredQuery = useDeferredValue(searchQuery);
  const isLoading = searchQuery !== deferredQuery;

  const handleClose = useCallback(() => {
    setSearchQuery("");
    setActiveCategory("all");
    onClose();
  }, [onClose, setSearchQuery]);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);
  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      // Smooth focus
      const timer = setTimeout(() => inputRef.current?.focus(), 300);

      return () => {
        document.body.style.overflow = originalStyle;
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  const filteredResults = useMemo(() => {
    return mockProjects.filter((project) => {
      const normalizedQuery = deferredQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery) ||
        project.location.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery);
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;
      return (project.isNative || project.showInGrid) && matchesSearch && matchesCategory;
    });
  }, [deferredQuery, activeCategory]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: 10,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] md:pt-[12vh] px-4 sm:px-6">
          {/* Rich Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0a0f20]/60 backdrop-blur-[2px] transition-all duration-500"
          />

          {/* Modal Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl bg-[#FFFFFF]  shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[75vh] border border-white/10 font-serif"
          >
            {/* Header / Input */}
            <div className="flex items-center px-5 py-5 border-b border-gray-100 flex-shrink-0">
              <div className="relative flex items-center flex-1">
                {isLoading ? (
                  <Loader2 className="md:w-5 w-3 h-3 md:h-5  text-[var(--color-accent)] animate-spin mr-3 flex-shrink-0" />
                ) : (
                  <Search className="md:w-5 w-4 h-4 md:h-5  text-gray-400 mr-3 flex-shrink-0" />
                )}
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Find a project..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-[var(--color-primary)] placeholder-gray-400 focus:outline-none text-xs md:text-base font-normal font-serif"
                />
              </div>

              <div className="flex items-center gap-3 ml-4">
                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600 sm:hidden"
                >
                  <X className="md:w-5 w-4 h-4 md:h-5" />
                </button>
              </div>
            </div>

            {/* Premium Category Filters */}
            <div className="flex items-center gap-2 px-5 py-3 bg-gray-50/80 border-b border-gray-100 overflow-x-auto no-scrollbar flex-shrink-0">
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex items-center gap-1.5 px-4 py-1.5 cursor-pointer  text-sm font-normal transition-all duration-300 whitespace-nowrap
                  ${activeCategory === "all"
                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[#232E5A]/20"
                    : "text-gray-500 hover:bg-white hover:text-[#232E5A] border border-transparent hover:border-gray-200"
                  }`}
              >
                Show All
              </button>
              {categories
                .filter((cat) => cat.value !== "all")
                .map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`flex items-center gap-1.5 px-4 py-1.5  text-sm font-normal cursor-pointer transition-all duration-300 whitespace-nowrap
                    ${activeCategory === cat.value
                        ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[#232E5A]/20"
                        : "text-gray-500 hover:bg-white hover:text-[#232E5A] border border-transparent hover:border-gray-200"
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
            </div>

            {/* Dynamic Content Area */}
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto min-h-0 bg-white"
            >
              {filteredResults.length > 0 ? (
                <div className="md:py-4 py-2.5">
                  <p className="px-3 md:px-6 py-2 text-[11px] font-semibold text-gray-400/80  mb-1">
                    {searchQuery
                      ? `Found ${filteredResults.length} Results`
                      : "Latest Projects"}
                  </p>
                  <div className="flex flex-col">
                    <AnimatePresence mode="popLayout">
                      {filteredResults.map((project) => {
                        const hasDetailPage =
                          project.hasDetailPage !== false && Boolean(project.slug);
                        const href = hasDetailPage
                          ? getProjectHref(project)
                          : undefined;

                        return (
                          <motion.div
                            key={project.id}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            layout
                          >
                            {hasDetailPage && href ? (
                              <Link
                                href={href}
                                onClick={handleClose}
                                className="group flex items-center px-3 md:px-6 py-3 md:py-4 hover:bg-[var(--color-secondary)] transition-all duration-300 relative border-l-4 border-transparent hover:border-[var(--color-accent)]"
                              >
                                <div className="relative md:w-20 h-12 md:h-20 w-12 overflow-hidden bg-[var(--color-secondary)] flex-shrink-0 border border-gray-100 group-hover:shadow-md transition-shadow">
                                  <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                </div>
                                <div className="ml-5 flex-1 min-w-0">
                                  <h4 className="text-base font-normal text-[var(--color-primary)] truncate group-hover:text-[var(--color-accent)] transition-colors">
                                    {project.title}
                                  </h4>
                                  <div className="flex items-center gap-3 mt-1 overflow-hidden">
                                    <span className="text-xs text-gray-600 font-medium uppercase flex-shrink-0">
                                      {project.category}
                                    </span>
                                    <span className="text-gray-600 flex-shrink-0">•</span>
                                    <span className="text-[10px] md:text-[11px] text-gray-600 truncate font-serif">
                                      {project.location}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            ) : (
                              <div
                                className="group flex items-center px-3 md:px-6 py-3 md:py-4 transition-all duration-300 relative border-l-4 border-transparent cursor-default"
                                aria-disabled
                              >
                                <div className="relative md:w-20 h-12 md:h-20 w-12 overflow-hidden bg-[var(--color-secondary)] flex-shrink-0 border border-gray-100 group-hover:shadow-md transition-shadow">
                                  <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                </div>
                                <div className="ml-5 flex-1 min-w-0">
                                  <h4 className="text-base font-normal text-[var(--color-primary)] truncate group-hover:text-[var(--color-accent)] transition-colors">
                                    {project.title}
                                  </h4>
                                  <div className="flex items-center gap-3 mt-1 overflow-hidden">
                                    <span className="text-xs text-gray-600 font-medium uppercase flex-shrink-0">
                                      {project.category}
                                    </span>
                                    <span className="text-gray-600 flex-shrink-0">•</span>
                                    <span className="text-[10px] md:text-[11px] text-gray-600 truncate font-serif">
                                      {project.location}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-20 px-8 text-center"
                >
                  <div className="w-20 h-20 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-[32px] flex items-center justify-center mb-8 relative">
                    <FolderSearch className="w-10 h-10 opacity-40" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-[var(--color-accent)] rounded-[32px]"
                    />
                  </div>
                  <h3 className="md:text-xl text-lg font-serif text-[var(--color-primary)] mb-3">
                    Project not found
                  </h3>
                  <p className="md:text-[15px] text-[13px] text-gray-500 max-w-[340px] mb-10 leading-relaxed">
                    We couldn&apos;t find any results for{" "}
                    <span className="text-[var(--color-primary)] font-semibold">
                      &quot;{searchQuery}&quot;
                    </span>
                    . Try a different term or browse our top categories.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm">
                    <button
                      onClick={() => setSearchQuery("")}
                      className="w-full px-8 py-3.5 border border-gray-200  cursor-pointer text-[14px] text-gray-600 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
                    >
                      Reset Search
                    </button>
                    <Link
                      href="/projects"
                      onClick={handleClose}
                      className="w-full px-8 py-3.5 bg-[var(--color-primary)] cursor-pointer text-white  text-[14px]  hover:bg-[#1a2345] active:scale-95 transition-all shadow-xl shadow-[#232E5A]/20"
                    >
                      View All Projects
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Modern Interactive Footer */}
            <div className="hidden md:flex items-center justify-between px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-2 text-[11px] font-medium text-[var(--color-accent)] uppercase">
                <kbd className="px-1.5 py-0.5 bg-white border border-[var(--color-accent)] shadow-sm text-[10px]">
                  ESC
                </kbd>
                <span className="">to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;



