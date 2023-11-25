import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
        <div className="nx-flex">
            <svg  width="20pt" height="20pt" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0,512) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                    <path d="M995 5095 l-25 -24 0 -321 0 -320 -64 0 c-74 0 -110 -21 -121 -71 -8 -34 1 -50 85 -154 31 -38 60 -75 63 -82 5 -7 -15 -23 -54 -44 -116 -62 -216 -165 -275 -284 -59 -120 -77 -214 -69 -357 l7 -108 -42 0 c-118 0 -211 -116 -196 -243 7 -64 45 -145 91 -195 33 -37 141 -102 170 -102 6 0 21 -33 33 -72 27 -92 81 -183 149 -253 45 -46 53 -60 53 -91 0 -32 -10 -47 -77 -118 l-78 -81 -164 -42 c-91 -24 -190 -55 -221 -70 -69 -33 -169 -132 -204 -201 -54 -107 -56 -128 -56 -618 0 -430 1 -453 19 -475 l19 -24 464 -5 463 -5 5 -348 5 -349 24 -19 c23 -19 62 -19 1563 -19 l1539 0 24 25 25 24 0 321 0 320 64 0 c54 0 69 4 94 25 l30 25 366 0 367 0 24 25 c25 24 25 24 25 235 0 211 0 211 -25 235 -31 32 -69 32 -100 0 -24 -24 -25 -28 -25 -185 l0 -160 -65 0 -65 0 0 248 c0 237 -1 250 -20 267 -28 25 -76 23 -103 -4 -21 -21 -22 -30 -25 -266 l-3 -245 -209 0 -208 0 -27 31 c-14 17 -25 35 -23 40 2 4 46 47 98 95 214 196 240 224 240 260 0 25 -10 45 -35 73 -19 21 -35 41 -35 45 0 3 40 26 89 51 92 46 121 73 121 112 0 13 -43 111 -94 219 -67 137 -90 194 -78 190 9 -3 65 -17 125 -32 128 -32 197 -70 248 -138 51 -67 69 -130 69 -238 0 -81 2 -91 25 -113 31 -32 69 -32 100 0 23 22 25 32 25 117 0 164 -42 272 -146 375 -79 80 -129 103 -336 156 l-163 42 -78 81 c-67 71 -77 86 -77 118 0 31 8 45 53 91 68 70 122 161 149 253 12 39 27 72 33 72 29 0 137 65 170 101 73 81 109 202 85 288 -22 82 -108 151 -188 151 l-40 0 1 148 c1 136 -1 153 -27 227 -61 176 -180 311 -340 386 l-66 31 0 474 0 475 -25 24 -24 25 -1541 0 -1541 0 -24 -25z m3005 -535 l0 -410 -60 0 -60 0 0 311 c0 316 -2 338 -39 366 -12 10 -210 12 -848 13 l-832 0 -20 -26 c-27 -35 -26 -57 3 -91 l24 -28 781 -3 781 -2 0 -284 0 -283 -72 -36 c-169 -84 -295 -237 -344 -418 -13 -48 -17 -98 -16 -201 l1 -138 -40 0 c-80 0 -168 -70 -189 -152 -24 -85 12 -206 85 -287 34 -37 141 -101 171 -101 7 0 18 -19 24 -42 30 -116 84 -211 164 -288 39 -38 46 -50 46 -83 0 -36 -8 -48 -77 -121 l-78 -81 -164 -42 c-91 -24 -189 -54 -218 -69 -114 -55 -212 -177 -245 -303 -15 -58 -17 -124 -17 -519 l-1 -453 25 -24 24 -25 367 0 366 0 30 -25 c25 -21 40 -25 94 -25 l64 0 0 -130 0 -130 -966 -2 -966 -3 -19 -24 c-25 -30 -24 -76 1 -101 20 -20 33 -20 1033 -20 1004 0 1013 0 1035 20 12 11 24 31 27 43 4 13 5 118 3 235 -3 200 -4 213 -24 233 -12 11 -36 24 -54 28 l-32 6 82 103 c45 56 85 102 90 102 8 0 170 -195 170 -204 0 -4 -11 -6 -24 -6 -14 0 -38 -11 -53 -24 l-28 -24 -3 -321 -3 -321 -1439 0 -1440 0 0 295 0 295 60 0 60 0 0 -196 c0 -265 -1 -263 167 -264 109 0 112 1 132 26 24 31 26 43 10 78 -14 30 -55 46 -116 46 l-44 0 3 152 3 153 462 5 c426 5 464 6 480 23 17 16 18 51 21 460 3 483 0 519 -51 627 -38 81 -131 176 -207 213 -31 15 -130 46 -221 70 l-164 42 -78 81 c-69 73 -77 85 -77 121 0 33 7 45 46 83 80 77 134 172 164 288 6 23 17 42 24 42 30 0 137 64 171 101 78 86 111 207 81 296 -27 81 -108 143 -185 143 l-40 0 1 133 c2 149 -8 207 -57 312 -60 131 -161 238 -287 305 -32 17 -58 33 -58 36 0 3 35 48 77 101 63 78 77 102 77 130 0 56 -39 83 -120 83 l-64 0 0 130 0 129 246 3 c245 3 246 3 265 27 25 30 24 76 -1 101 -19 19 -33 20 -313 20 -281 0 -294 -1 -315 -20 -12 -11 -24 -31 -27 -43 -4 -13 -5 -118 -3 -235 3 -200 4 -213 24 -233 12 -11 36 -24 54 -28 l32 -6 -82 -103 c-45 -56 -85 -102 -90 -102 -8 0 -170 195 -170 204 0 4 11 6 24 6 14 0 38 11 53 24 l28 24 3 321 3 321 1439 0 1440 0 0 -410z m66 -574 c117 -31 260 -141 310 -238 51 -98 69 -209 56 -343 l-7 -80 -69 115 c-38 63 -76 123 -84 132 -28 33 -63 31 -147 -9 -76 -36 -85 -38 -180 -38 -94 0 -105 2 -189 39 -71 31 -94 37 -115 30 -16 -6 -58 -51 -107 -116 l-81 -107 -7 70 c-15 168 38 314 158 427 119 113 304 160 462 118z m-2973 -56 c61 -79 120 -76 182 9 17 22 38 41 48 41 32 0 138 -61 189 -108 129 -121 176 -257 160 -467 l-8 -100 -29 50 c-17 27 -43 64 -60 81 l-30 31 -185 6 c-204 7 -295 24 -426 78 -65 27 -78 29 -108 19 -42 -14 -49 -21 -96 -111 l-37 -71 -8 57 c-15 121 31 284 103 368 14 16 17 15 40 -20 45 -69 78 -80 126 -42 35 28 34 71 -4 129 -32 49 -31 54 27 81 59 27 74 23 116 -31z m2672 -533 c42 -18 71 -21 175 -22 112 0 131 3 187 26 l62 26 111 -185 111 -186 -10 -130 c-6 -72 -18 -153 -27 -181 -51 -150 -187 -271 -342 -304 -199 -42 -407 60 -497 243 -41 83 -51 132 -60 318 l-8 137 109 146 c79 106 113 144 124 139 8 -4 38 -16 65 -27z m-2819 -11 c111 -39 219 -57 381 -63 l152 -6 85 -142 85 -142 -9 -111 c-5 -61 -14 -130 -20 -154 -32 -118 -132 -238 -244 -291 -166 -79 -362 -51 -497 71 -110 99 -145 182 -161 387 l-11 139 84 168 c46 92 84 168 85 168 0 0 32 -11 70 -24z m-392 -258 c8 -80 13 -178 8 -178 -13 0 -64 45 -80 73 -50 80 -34 157 33 157 33 0 34 -1 39 -52z m1345 21 c22 -39 -1 -111 -51 -161 -21 -21 -42 -38 -47 -38 -9 0 -5 130 5 198 5 31 7 33 42 30 27 -2 40 -10 51 -29z m1415 -1 c10 -69 14 -198 5 -198 -20 0 -85 78 -97 116 -16 53 -15 65 4 92 10 15 25 22 49 22 31 0 35 -3 39 -32z m1342 7 c30 -45 -4 -141 -66 -185 -15 -11 -30 -20 -32 -20 -5 0 0 98 8 178 5 51 6 52 39 52 26 0 39 -6 51 -25z m-3596 -860 c102 -23 199 -17 328 21 16 4 22 2 22 -8 0 -8 -52 -50 -116 -92 l-116 -78 -114 78 c-63 43 -114 84 -114 92 0 10 7 12 23 8 12 -4 51 -13 87 -21z m2760 0 c102 -23 199 -17 328 21 16 5 22 2 22 -10 0 -9 -47 -47 -114 -92 l-114 -76 -116 78 c-64 42 -116 84 -116 92 0 10 6 12 23 8 12 -4 51 -13 87 -21z m-2860 -192 l101 -67 -48 -48 -47 -48 -69 105 c-62 94 -74 125 -46 125 5 0 54 -30 109 -67z m565 56 c7 -11 -119 -209 -133 -209 -4 0 -27 20 -51 44 l-43 44 98 66 c101 67 118 74 129 55z m2199 -55 l98 -66 -43 -44 c-24 -24 -47 -44 -51 -44 -14 0 -140 198 -133 209 11 19 29 12 129 -55z m561 55 c4 -6 -24 -57 -62 -114 l-69 -105 -47 48 -48 48 98 67 c101 68 117 75 128 56z m-3476 -253 c88 -131 103 -146 142 -146 44 0 43 -34 -17 -421 l-58 -368 27 -40 27 -41 -249 0 -250 0 -3 245 c-3 236 -4 245 -25 266 -27 27 -75 29 -103 4 -19 -17 -20 -30 -20 -267 l0 -248 -65 0 -65 0 0 399 c0 446 2 458 69 547 58 77 111 103 315 156 100 25 182 47 183 47 2 1 43 -59 92 -133z m1234 16 c60 -32 102 -79 136 -152 l26 -55 3 -412 3 -413 -66 0 -65 0 0 244 c0 268 -2 277 -62 292 -22 5 -33 0 -58 -24 l-30 -30 0 -241 0 -241 -250 0 -250 0 26 40 27 40 -57 368 c-60 388 -62 422 -17 422 39 0 54 15 141 145 l89 133 178 -45 c98 -24 200 -56 226 -71z m1278 -14 c-27 -57 -69 -145 -95 -195 -25 -51 -46 -103 -46 -116 0 -40 33 -70 128 -116 l91 -45 -39 -43 c-50 -53 -52 -88 -11 -136 16 -18 93 -91 170 -162 78 -70 141 -133 141 -139 0 -6 -12 -23 -25 -39 l-24 -27 -211 0 -210 0 0 241 0 241 -30 30 c-25 24 -36 29 -58 24 -60 -15 -62 -24 -62 -292 l0 -244 -65 0 -66 0 3 413 3 412 26 55 c55 117 115 159 294 207 66 17 123 32 127 32 4 1 -15 -45 -41 -101z m-2097 -7 c37 -38 38 -40 26 -75 l-12 -37 -61 3 c-60 3 -62 4 -71 36 -8 30 -6 36 29 72 22 22 42 40 45 40 3 0 23 -18 44 -39z m2761 -1 c35 -36 37 -42 29 -72 -9 -32 -11 -33 -71 -36 l-61 -3 -12 37 c-12 35 -11 37 26 75 21 21 41 39 44 39 3 0 23 -18 45 -40z m-346 -404 c72 -225 129 -411 127 -414 -5 -4 -60 44 -250 219 -19 18 -19 19 27 68 38 40 47 57 47 86 0 47 -20 65 -140 125 l-100 50 72 145 c40 79 75 141 79 137 3 -4 65 -191 138 -416z m889 129 c-2 -1 -50 -26 -108 -55 -57 -29 -110 -60 -117 -69 -27 -35 -16 -79 35 -133 l47 -50 -46 -42 c-26 -22 -86 -77 -133 -120 -48 -43 -89 -77 -91 -74 -3 2 4 31 15 64 10 32 71 221 136 419 l116 360 75 -149 c41 -81 73 -149 71 -151z m-781 79 c8 -53 -13 -33 -22 21 -6 30 -5 37 4 29 7 -6 14 -28 18 -50z m411 13 c-14 -42 -28 -57 -28 -30 0 32 19 75 29 68 6 -3 6 -18 -1 -38z m-2934 -85 c6 -11 96 -582 96 -612 0 -12 -19 -46 -42 -76 -43 -54 -43 -54 -99 -54 l-56 0 -45 58 -45 57 48 307 c26 169 50 312 54 318 7 12 82 14 89 2z m2765 -14 c4 -13 16 -81 26 -151 17 -121 18 -131 1 -182 l-17 -54 -30 11 c-22 8 -38 7 -55 -1 -14 -6 -27 -11 -29 -11 -2 0 -12 25 -21 55 -17 53 -17 60 4 197 13 77 25 145 28 149 3 5 23 9 45 9 32 0 41 -4 48 -22z"/>
                    <path d="M3965 3130 c-35 -14 -44 -34 -47 -110 -3 -72 -4 -74 -33 -83 -47 -15 -65 -36 -65 -77 0 -51 24 -70 87 -70 59 0 107 27 137 80 17 28 21 52 21 127 0 79 -3 95 -20 112 -25 24 -54 32 -80 21z"/>
                    <path d="M1205 3130 c-37 -14 -48 -39 -53 -115 -4 -71 -6 -74 -32 -80 -59 -13 -84 -82 -45 -125 25 -27 107 -28 153 0 58 35 72 72 72 186 0 84 -3 104 -17 116 -24 21 -54 28 -78 18z"/>
                </g>
            </svg>
            <span className="nx-ml-2">Переподготовка ПОИС</span>
        </div>
    ),
    project: {
        link: 'https://github.com/stasnocap/sb-bsu-perepodgotovka-pois-docs',
    },
    chat: {
        link: 'https://t.me/+zR-1uq_4bS4wMGM6',
        icon: (
            <svg width="30" height="30" viewBox="0 0 50 50">
                <path
                    fill="currentColor"
                    d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
        )
    },
    docsRepositoryBase: 'https://github.com/stasnocap/sb-bsu-perepodgotovka-pois-docs/tree/main',
    footer: {
        text: 'MIT 2023',
    },
    head: (
        <>
            <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s – ПОИС'
        }
    }
}

export default config
