// ( () =>
// {
//     'use strict'

//     const storedTheme = localStorage.getItem('theme')

//     const getPreferredTheme = () =>{
//         if (storedTheme){
//             return storedTheme
//         }
//         return window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 'dark' : 'light'
//     }

//     const setTheme = function ( theme ){
//         if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches){
//             document.documentElement.setAttribute( 'data-bs-theme', 'dark' )
//         } else if (theme === "auto" && window.matchMedia("(prefers-color-scheme: light)").matches) {
//             document.documentElement.setAttribute( "data-bs-theme", "light" );
//         } else {
//             document.documentElement.setAttribute( 'data-bs-theme', theme )
//         }
//     }

//     setTheme( getPreferredTheme() )

//     const showActiveTheme = theme =>{
//         // const activeThemeIcon = document.querySelector('.theme-icon-active')
//         // const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
//         // const iconOfActiveBtn = btnToActive.querySelector('i').dataset.themeIcon;
        

//         // document.querySelectorAll('[data-bs-theme-value]').forEach( element =>{element.classList.remove( 'active' )})

//         // btnToActive.classList.add('active')
//         // activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive)
//         // activeThemeIcon.classList.add(iconOfActiveBtn)
//         // activeThemeIcon.dataset.iconActive = iconOfActiveBtn

//         const activeThemeIcon = document.querySelector( '.theme-icon-active' );
//         const btnToActive = document.querySelector( `[data-bs-theme-value="${ theme }"]` );
//         const iconOfActiveBtn = btnToActive.querySelector( 'i' ).dataset.themeIcon;

//         document.querySelectorAll( '[data-bs-theme-value]' ).forEach( ( element ) =>
//         {
//             element.classList.remove( 'active' );
//         } );

//         // Check if the theme is "auto" and set the icon accordingly
//         if ( theme === 'auto' )
//         {
//             btnToActive.classList.add( 'active' );
//             activeThemeIcon.classList.remove( activeThemeIcon.dataset.themeIconActive );
//             activeThemeIcon.classList.add( iconOfActiveBtn );
//             activeThemeIcon.dataset.themeIconActive = iconOfActiveBtn;
//         } else
//         {
//             btnToActive.classList.add( 'active' );
//             activeThemeIcon.classList.remove( activeThemeIcon.dataset.themeIconActive );
//             activeThemeIcon.classList.add( iconOfActiveBtn );
//             activeThemeIcon.dataset.themeIconActive = iconOfActiveBtn;
//         }
//     }

//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () =>{
//         if ( storedTheme !== 'light' || storedTheme !== 'dark'){
//             setTheme(getPreferredTheme())
//         }
//     })

//     window.addEventListener( 'DOMContentLoaded', () =>{
//         showActiveTheme(getPreferredTheme())

//         document.querySelectorAll('[data-bs-theme-value]').forEach( toggle =>{
//                 toggle.addEventListener( 'click', () =>{
//                     const theme = toggle.getAttribute('data-bs-theme-value')
//                     localStorage.setItem('theme', theme)
//                     setTheme(theme)
//                     showActiveTheme(theme, true)
//                 })
//             })
//     })
// } )()