
// import React, { useContext } from "react";
// import Select from "react-select";
// import * as langEn from '../../locales/translationEn';
// //import * as langUa from '../../locales/translationUa';

// const Translation = () => {
//     const { language, setLanguage } = useContext();
//     const chooseLanguage = (e) => {
//         const selectedLang = e.value;
//         setLanguage(selectedLang);
//         //console.log(selectedLang)
//     };


//     const getLanguageOptions = () => {
//         const languageOptions = langEn.list.reduce((acc, selectedLang) => {
//             acc.push({
//                 value: selectedLang,
//                 label: selectedLang.slice(0, 2).toUpperCase(),
//             });
//             return acc;
//         }, [])
//         return languageOptions
//     };

//     const getSelectedLang = () => {
//         return langEn.list.findIndex((selectedLang) => selectedLang === langEn)
//     };

// // return (
// //     <div>
// //         <Select
// //             options={getLanguageOptions()}
// //             onChange={chooseLanguage}
// //             value={getLanguageOptions()[getSelectedLang()]}
// //             placeholder={false}
// //     
// //         />
// //     </div>
// // )

// }

