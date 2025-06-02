"use client";

import {
  initialContactFormSchema,
  type ContactFormSchema,
  type InitialContactFormSchema,
} from "@/lib/validation/contact-form-schema";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const defaultContactForm: InitialContactFormSchema = {
  email: "",
  phone: "",
  serviceType: undefined,
  additionalFeatures: [],
};

const LOCAL_STORAGE_KEY = "contact-form-data";

type ContactFormContextType = {
  newContactFormData: InitialContactFormSchema;
  dataLoaded: boolean;
  updateContactForm: (data: Partial<ContactFormSchema>) => void;
  resetLocalStorage: () => void;
};

export const ContactFormContext = createContext<ContactFormContextType>(
  {} as ContactFormContextType,
);

export const ContactFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [newContactFormData, setNewContactFormData] =
    useState<InitialContactFormSchema>(defaultContactForm);

  const [dataLoaded, setDataLoaded] = useState(false);

  const updateContactForm = useCallback(
    (data: Partial<ContactFormSchema>) => {
      setNewContactFormData({ ...newContactFormData, ...data });
    },
    [newContactFormData],
  );

  const saveDataToLocalStorage = (data: InitialContactFormSchema) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

  const readFromLocalStorage = () => {
    const loadedDataString = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!loadedDataString) return setNewContactFormData(defaultContactForm);
    const validated = initialContactFormSchema.safeParse(
      JSON.parse(loadedDataString),
    );

    if (validated.success) {
      setNewContactFormData(validated.data);
    } else {
      setNewContactFormData(defaultContactForm);
    }
  };

  const resetLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setNewContactFormData(defaultContactForm);
  };

  useEffect(() => {
    readFromLocalStorage();
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      saveDataToLocalStorage(newContactFormData);
    }
  }, [newContactFormData, dataLoaded]);

  const contextValue = useMemo(
    () => ({
      newContactFormData,
      dataLoaded,
      updateContactForm,
      resetLocalStorage,
    }),
    [newContactFormData, dataLoaded, updateContactForm],
  );

  return (
    <ContactFormContext.Provider value={contextValue}>
      {children}
    </ContactFormContext.Provider>
  );
};

export function useContactFormContext() {
  const context = useContext(ContactFormContext);

  if (context === null) {
    throw new Error(
      "useContactFormContext must be used within a ContactFormProvider",
    );
  }

  return context;
}
