module.exports = [
"[project]/src/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndexPage,
    "getServerSideProps",
    ()=>getServerSideProps
]);
const getServerSideProps = async (context)=>{
    const req = context.req;
    // Get browser language from Accept-Language header
    const acceptLanguage = req?.headers["accept-language"] || "";
    const browserLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
    // Determine preferred language (German for Germany, otherwise English)
    const preferredLang = browserLang === "de" ? "de" : "en";
    // Always redirect to the appropriate language route
    return {
        redirect: {
            destination: `/${preferredLang}`,
            permanent: false
        }
    };
};
function IndexPage() {
    // This component will never be rendered due to the redirect
    return null;
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e0602f17._.js.map