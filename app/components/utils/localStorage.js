// utils/localStorage.js

// Função para salvar dados no localStorage
export const setLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  // Função para ler dados do localStorage
  export const getLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    }
    return null;
  };
  
  // Função para remover dados do localStorage
  export const removeLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };
  