<template>
    <NavBar class="fixed bg-white text-green shadow-lg w-full z-50" />
    <div class="min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <h1 class="font-bold text-center text-green-800 mb-20 text-4xl mt-5">Contáctame</h1>
        
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center p-10">
            <div class="flex flex-col items-center pb-10">
                
                <img class="w-24 h-24 mb-3 rounded-full sha" src="../../public/fotoPerfil.jpeg" alt="Imagen">
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ing. Jorge Isaac Coello Berrios</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400 m-5">Frontend Developer | Reseacher | Writer</span>

                <div class="flex flex-col items-start space-y-4">
                    <!-- Telegram -->
                    <div class="flex items-center space-x-2">
                        <svg width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"/>
                            <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#37BBFE"/>
                            <stop offset="1" stop-color="#007DBB"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <span >@JorgeCoello</span>
                    </div>

                    <!-- Correo -->
                    <div class="flex items-center space-x-2">
                        <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"/></svg>
                        <a href="mailto:jorgecoello1998@hotmail.com">jorgecoello1998@hotmail.com</a>
                    </div>

                    <!-- LinkedIn -->
                    <div class="flex items-center space-x-2">
                        <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>
                        <a href="https://www.linkedin.com/in/jorge-isaac-coello-berrios-947526237/" target="_blank" rel="noopener noreferrer">Jorge Isaac Coello Berrios</a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <FooterPage />
</template>

<script>
    import NavBar from "../components/NavHome.vue";
    import FooterPage from "../components/Footer.vue";
    export default {
        name: "ContactView",
        components: {
            NavBar, 
            FooterPage,
        },
    };
</script>