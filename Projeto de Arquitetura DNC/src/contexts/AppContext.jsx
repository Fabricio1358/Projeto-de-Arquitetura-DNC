import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Importe PropTypes
import { getApiData } from "../services/apiServices";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const savedLanguage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(savedLanguage ?? 'br')
    const [languages, setLanguages] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext');
                setLanguages(getTexts);
            } catch (e) {
                console.error("Error fetching language data:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchLanguages();
    }, [])

    useEffect(() => {
        localStorage.setItem('lang', language)
    }, [language])

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {loading ? <LoadingSpinner /> : children}
        </AppContext.Provider>
    );
};

// Validação de PropTypes
AppProvider.propTypes = {
    children: PropTypes.node.isRequired // children deve ser um nó React e é obrigatório
};

export default AppProvider;