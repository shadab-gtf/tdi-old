export type FormDataState = Record<string, any>;

export interface FieldConfig {
  type: string;
  name?: string;
  label?: string;
  required?: boolean;
  col?: string;
  multiple?: boolean;
  rows?: number;
  options?: Array<{ label: string; value: any; default?: boolean }>;
  fetchOptions?: boolean;
  end_point?: string;
  limit?: number;
  isChunk?: boolean;
  showIf?: (formData: FormDataState) => boolean;
  fields?: (FieldConfig | ArrayFieldConfig)[];
  investor_card?: boolean;
  stringArray?: boolean;
  content?: string;
}

export interface ArrayFieldConfig extends FieldConfig {
  type: "array";
  fields: FieldConfig[];
}

export interface MultiFieldConfig extends FieldConfig {
  type: "multi-field";
  allowedFields?: AllowedDynamicField[];
}

export interface LabelFieldConfig extends FieldConfig {
  type: "label";
  content?: string;
}

export interface AllowedDynamicField {
  type: string;
  baseName: string;
  label?: string;
}

export type DynamicField = FieldConfig | ArrayFieldConfig | MultiFieldConfig | LabelFieldConfig;

export interface DynamicFormProps {
  title?: string;
  fields?: DynamicField[];
  defaultValues?: Record<string, any>;
  onSubmit: (formData: Record<string, any>) => Promise<boolean>;
  onFieldChange?: (fieldName: string, value: any) => void | Promise<void>;
  col?: number;
  loading?: boolean;
  className?: string;
}
