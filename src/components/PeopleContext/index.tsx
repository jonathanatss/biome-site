import { createContext, useState, ReactNode } from "react";

type PeopleContextProviderProps = {
  children: ReactNode;
};

type PeopleContextData = {
  selectedTags: any[];
  setSelectedTags: (tags: any[]) => void;
  isUnderTag: (tags: any[]) => boolean;
};

export const PeopleContext = createContext({} as PeopleContextData);

export default function PeopleContextProvider({
  children,
}: PeopleContextProviderProps) {
  const [selectedTags, setSelectedTags] = useState([] as any[]);

  //recebe uma lista de tags, retorna se a tags estão dentre as selecionadas pelo usuário
  function isUnderTag(userTags: any[]): boolean {
    if (selectedTags.length == 0) {
      return true;
    }

    let auxReturn = false;

    //transformando a lista de objetos em lista de strings(só com o campo de tags)

    let tagList = [];

    try {
      userTags.forEach((tagObj) => {
        tagList.push(tagObj.tag);
      });
    } catch {
      return false;
    }

    selectedTags.forEach((tag) => {
      if (tagList.includes(tag)) {
        auxReturn = true;
      }
    });
    return auxReturn;
  }

  return (
    <PeopleContext.Provider
      value={{ selectedTags, setSelectedTags, isUnderTag }}
    >
      {children}
    </PeopleContext.Provider>
  );
}
