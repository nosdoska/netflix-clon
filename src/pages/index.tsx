import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import classnames from 'classnames'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdLanguage } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { CgChevronRight } from 'react-icons/cg'
import AnimateHeight from 'react-animate-height'

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

function Form(): React.ReactElement {
    const [email, setEmail] = React.useState<string>('')
    const [error, setError] = React.useState<string | null>(null)

    const inputClassname = classnames('block w-full px-2 pt-5 pb-1 focus:outline-none md:h-16', {
        'border border-solid border-gray-500 focus:border-blue-600': error === null,
        'border-b-2 border-solid border-yellow-600': error !== null,
    })
    const labelClassname = classnames(
        'absolute ml-2 text-gray-500 transition-transform duration-100 ease-in-out transform top-1/2 group-focus-within:text-xs group-focus-within:-translate-y-5 md:group-focus-within:-translate-y-6',
        {
            '-translate-y-1/2 text-sm': email === '',
            '-translate-y-5 text-xs md:-translate-y-6': email !== '',
        }
    )

    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setEmail(event.target.value)
    }

    function onEmailBlur(): void {
        if (email === '') {
            setError('El email es obligatorio.')
        } else if (!EMAIL_REGEX.test(email)) {
            setError('Escribe una dirección de email válida.')
        } else {
            setError('')
        }
    }

    return (
        <>
            <h3 className='w-4/5 mx-auto mb-3 text-lg font-light text-center text-white md:text-2xl lg:text-xl'>
                ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
            </h3>

            <form
                onSubmit={(event) => event.preventDefault()}
                className='max-w-xl px-4 mx-auto lg:max-w-3xl lg:flex lg:items-start lg:justify-center lg:mt-4'
            >
                <div className='relative lg:w-1/2'>
                    <div className='relative flex items-center group'>
                        <label className={labelClassname}>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={onEmailChange}
                            onBlur={onEmailBlur}
                            className={inputClassname}
                        />
                    </div>

                    {error ? <span className='block mt-1 text-sm text-yellow-700'>{error}</span> : null}
                </div>

                <button
                    type='submit'
                    className='flex items-center px-4 py-2 mx-auto mt-6 text-lg text-white rounded shadow bg-primary lg:mx-0 lg:mt-0 lg:py-3 lg:rounded-bl-none lg:rounded-tl-none lg:text-xl lg:h-16 focus:outline-none'
                >
                    Sé parte de la conversación <CgChevronRight />
                </button>
            </form>
        </>
    )
}

export default function Home() {
    const [height, setHeight] = React.useState<number | string>(0)

    return (
        <div>
            <Head>
                <title>Netflix Chile: Ve series online, ve películas online</title>
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap'
                    rel='stylesheet'
                />
            </Head>

            <div
                style={{ backgroundImage: 'url(/images/home_background.jpg)' }}
                className='object-cover border-b-8 border-solid border-mineShaft'
            >
                <div className='relative bg-black bg-opacity-50'>
                    <div className='absolute top-0 z-auto w-full h-10 bg-gradient-to-b from-black md:h-24' />

                    <div className='relative z-10 flex justify-between p-4 md:mx-6 md:py-10'>
                        <svg viewBox='0 0 111 30' className='w-24 text-primary'>
                            <g fill='currentColor'>
                                <path
                                    d='M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z'
                                    id='Fill-14'
                                />
                            </g>
                        </svg>

                        <Link href='/login'>
                            <a className='h-6 px-2 text-sm leading-6 text-white rounded bg-primary md:px-5 md:py-2 md:leading-normal md:h-auto'>
                                Iniciar sesión
                            </a>
                        </Link>
                    </div>

                    <div className='max-w-4xl py-12 mx-auto space-y-4 md:py-32'>
                        <h1 className='w-4/5 mx-auto text-3xl font-bold text-center text-white md:text-5xl'>
                            Películas y series ilimitadas y mucho más.
                        </h1>
                        <h2 className='w-4/5 mx-auto text-lg font-light text-center text-white md:text-3xl'>
                            Disfruta donde quieras. Cancela cuando quieras.
                        </h2>

                        <Form />
                    </div>
                </div>
            </div>

            <div className='px-4 py-12 text-white bg-black border-b-8 border-solid border-mineShaft md:py-20 md:px-8'>
                <div className='lg:flex lg:items-center lg:px-12 lg:max-w-screen-lg lg:mx-auto'>
                    <div className='lg:mx-auto lg:w-1/2 lg:mr-6'>
                        <h1 className='mb-3 text-2xl font-bold text-center md:text-4xl lg:text-left lg:text-5xl'>
                            Disfruta en tu TV.
                        </h1>
                        <h2 className='text-lg font-light text-center md:text-2xl lg:text-left'>
                            Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.
                        </h2>
                    </div>

                    <div className='relative max-w-xl md:mx-auto'>
                        <div className='relative z-20'>
                            <img src='/images/home_tv.png' />
                        </div>

                        <div
                            className='absolute left-0 right-0 z-10 w-full h-full mx-auto'
                            style={{
                                maxWidth: '73%',
                                maxHeight: '54%',
                                top: '48%',
                                bottom: '50%',
                                transform: 'translate(0, -50%)',
                            }}
                        >
                            <video autoPlay playsInline muted loop>
                                <source src='/images/home_video_1.m4v' type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 py-12 text-white bg-black border-b-8 border-solid border-mineShaft md:py-20 md:px-8'>
                <div className='lg:flex lg:items-center lg:px-12 lg:flex-row-reverse lg:max-w-screen-lg lg:mx-auto'>
                    <div className='lg:w-2/3 lg:ml-6'>
                        <h1 className='mb-3 text-2xl font-bold text-center md:text-4xl lg:text-left lg:text-5xl'>
                            Descarga tus series para verlas offline.
                        </h1>
                        <h2 className='text-lg font-light text-center md:text-2xl lg:text-left'>
                            Guarda tu contenido favorito y ten siempre algo para ver.
                        </h2>
                    </div>

                    <div className='relative max-w-xl md:mx-auto'>
                        <div className='relative z-10'>
                            <img src='/images/home_mobile.jpg' />
                        </div>

                        <div className='relative z-20 w-full h-full max-w-xs mx-auto -mt-20 bg-black md:-mt-24'>
                            <div className='flex items-center w-full max-w-full p-2 mx-auto border-2 border-solid rounded-xl border-boulder md:border-3 md:h-20'>
                                <img src='/images/home_mobile_capture.png' className='h-12 md:h-16' />

                                <div className='ml-3'>
                                    <span className='block text-white md:text-base'>Stranger Things</span>
                                    <span className='block text-xs text-blue-600 md:text-sm'>Descargando...</span>
                                </div>

                                <img src='/images/home_download_icon.gif' className='w-12 ml-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 py-12 text-white bg-black border-b-8 border-solid border-mineShaft md:py-20 md:px-8'>
                <div className='lg:flex lg:items-center lg:px-12 lg:max-w-screen-lg lg:mx-auto'>
                    <div className='lg:w-1/2 lg:mr-6'>
                        <h1 className='mb-3 text-2xl font-bold text-center md:text-4xl lg:text-left lg:text-5xl'>
                            Disfruta donde quieras.
                        </h1>
                        <h2 className='text-lg font-light text-center md:text-2xl lg:text-left'>
                            Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra.
                        </h2>
                    </div>

                    <div className='relative max-w-xl mx-auto'>
                        <div className='relative z-20'>
                            <img src='/images/home_devices.png' />
                        </div>

                        <div
                            className='absolute left-0 right-0 z-10 w-full h-full mx-auto'
                            style={{
                                maxWidth: '62%',
                                maxHeight: '56%',
                                top: '38%',
                                bottom: '50%',
                                transform: 'translate(0, -50%)',
                            }}
                        >
                            <video autoPlay playsInline muted loop>
                                <source src='/images/home_video_2.m4v' type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-12 text-white bg-black border-b-8 border-solid border-mineShaft md:py-20 md:px-8'>
                <h1 className='mb-6 text-2xl font-bold text-center md:text-4xl lg:text-5xl lg:mb-12'>
                    Preguntas Frecuentes
                </h1>

                <ul className='max-w-2xl mx-auto mb-12'>
                    <li className='bg-tundora'>
                        <button
                            onClick={() => setHeight((s) => (s === 0 ? 'auto' : 0))}
                            className='flex items-center justify-between w-full p-4 text-lg text-left border-b border-black border-solid focus:outline-none lg:text-2xl lg:p-6'
                        >
                            ¿Qué es netflix?{' '}
                            <AiOutlinePlus
                                className={`text-2xl lg:text-4xl ${height === 0 ? '' : 'transform rotate-45'}`}
                            />
                        </button>
                        <AnimateHeight height={height} duration={150}>
                            <div className='p-4 text-lg font-light lg:text-2xl lg:p-6'>
                                <span>
                                    Netflix es un servicio de streaming que ofrece una gran variedad de películas,
                                    series y documentales premiados en casi cualquier pantalla conectada a internet.
                                    <br />
                                    <br />
                                    Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible.
                                    Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas
                                    y series!
                                </span>
                            </div>
                        </AnimateHeight>
                    </li>
                </ul>

                <Form />
            </div>

            <div className='px-4 py-12 bg-black text-boulder md:px-12'>
                <div className='space-y-10 lg:max-w-screen-lg lg:mx-auto'>
                    <p className='text-lg md:text-base'>¿Preguntas? Llama al 123 123 987 987</p>

                    <ul className='grid grid-cols-2 gap-4 text-sm md:grid-cols-4'>
                        <li>
                            <a href=''>Preguntas frecuentes</a>
                        </li>
                        <li>
                            <a href=''>Centro de ayuda</a>
                        </li>
                        <li>
                            <a href=''>Cuenta</a>
                        </li>
                        <li>
                            <a href=''>Prensa</a>
                        </li>
                        <li>
                            <a href=''>Relaciones con inversionistas</a>
                        </li>
                        <li>
                            <a href=''>Empleo</a>
                        </li>
                        <li>
                            <a href=''>Canjear tarjetas de regalo</a>
                        </li>
                        <li>
                            <a href=''>Formas de ver</a>
                        </li>
                        <li>
                            <a href=''>Términos de uso</a>
                        </li>
                        <li>
                            <a href=''>Privacidad</a>
                        </li>
                        <li>
                            <a href=''>Preferencias de cookies</a>
                        </li>
                        <li>
                            <a href=''>Información corporativa</a>
                        </li>
                        <li>
                            <a href=''>Contáctanos</a>
                        </li>
                        <li>
                            <a href=''>Prueba de velocidad</a>
                        </li>
                        <li>
                            <a href=''>Avisos legales</a>
                        </li>
                        <li>
                            <a href=''>Originales de Netflix</a>
                        </li>
                    </ul>

                    <div className='relative text-boulder'>
                        <MdLanguage className='absolute ml-4 text-xl transform -translate-y-1/2 pointer-events-none text-boulder top-1/2' />

                        <select className='py-4 pl-12 pr-6 bg-black border border-solid rounded appearance-none border-boulder'>
                            <option value=''>Español</option>
                            <option value=''>English</option>
                        </select>

                        <IoMdArrowDropdown className='absolute text-xl transform -translate-y-1/2 pointer-events-none ml-28 text-boulder top-1/2' />
                    </div>

                    <p className='mb-0 text-sm text-boulder'>Netflix Chile</p>
                </div>
            </div>
        </div>
    )
}
