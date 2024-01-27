import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../../assets/RAHIL_FOUNDATION_LOGO-removebg-preview_20231205_111145_0000.png"
import Navbar from "../../pages/navbar"
import Footer from '../../pages/footer'
const blog = () => {
    return (
        <div className='text-lg w-screen overflow-hidden'>
            <Navbar />
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-white-900 antialiased overflow-hidden    ">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">

                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-800 lg:mb-6 lg:text-4xl ">CYBER LITERACY 2</h1>
                        </header>
                        <p className="lead text-lg">Digitalsafety matters! Know the basics to stay secure online.
                            Guard your personal info—avoid sharing it with unknown
                            contacts. Use strong, unique passwords. Watch out for
                            suspicious links and Emails. Keep your devices updated for
                            bettersecurity. Stay informed about common online scams. If
                            something feels fishy, report it. Let's work together to create
                            a safer digital space then Join Now.
                            <span className='hover:text-blue-500 hover:underline font-bold'> <Link href="http://rahilfoundation.com">RAHIL FOUNDATION</Link> </span>
                            because our Primary Goal your Safety.
                        </p>
                        <br />
                        <span className='font-bold text-lg text-red-600'>NATIONAL HELPLINE NO. 1930</span>
                        <br />

                        <p> <span className='font-bold text-lg'>Phishing Awareness:</span> : Understanding and Recognizing
                            Phishing attempts, where cybercriminals try to trick
                            individuals into revealing sensitive Information. Phishing
                            awareness is about being alert and cautious to protect
                            yourself from online scams. Phishing is a type of
                            <span className='hover:text-blue-500 hover:underline font-bold'> <Link href="http://rahilfoundation.com">Cyber Attack</Link> </span>
                            where scammers try to trick people into revealing sensitive information, such as passwords or credit card
                            numbers, by posing as trustworthy entities. Being aware
                            means recognizing the signs of phishing attempts, like
                            suspicious emails or fake websites, and not falling for them.
                            It's like having a "radar" for potential online scams and
                            knowing how to avoid being tricked into sharing personal or
                            confidential information.
                            <br />
                            <br /> Be cautious about sharing
                            sensitive personal information, such as your address,
                            phone number, or financial details, on social media.
                            Only share what is necessary and appropriate. Be
                            cautious about sharing sensitive personal information,
                            such as your address, phone number, or financial
                            details, on social media. Only share what is necessary
                            and appropriate.</p>
                        <br />
                        <p><span className='font-bold '>Social Media Safety:</span> Guidelines for Maintaining Securities &
                            Privacy while using Social Media platforms including setting
                            <span className='hover:text-blue-500 hover:underline font-bold'> <Link href="http://rahilfoundation.com"> Social media safety</Link> </span>
                            refers to the measures and
                            precautions individuals can take to protect themselves
                            and their personal information while using social media
                            platforms. Here are some key aspects of social media
                            safety Familiarize yourself with the privacy settings of
                            your social media accounts. Adjust these settings to control who can see your posts, personal information,
                            and who can contact you. Consider the potential
                            consequences of your posts. Once something is posted
                            online, it can be challenging to control its dissemination.
                            Avoid sharing information or images that you wouldn't
                            want to be public.</p>
                        <figure><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />
                        </figure>
                        <p >
                            <span className='hover:text-blue-500 hover:underline font-bold'> <Link href="http://rahilfoundation.com">Data security: </Link></span>
                            n simple terms means keeping information safe from unauthorized access, theft,
                            or damage. It involves taking measures to protect data,
                            which can be anything from personal details like your
                            name and address to more sensitive information like
                            passwords, financial records, or private messages.
                            Keeping data private and only accessible to those who
                            have the right to see it. Making sure that authorized
                            users can access the data when they need it, without
                            disruption. Converting information into a secret code so
                            that even if it's intercepted, it can't be easily understood
                            by unauthorized individuals. appropriate Sufficient Privacy Settings.</p>


                    </article>
                </div>
            </main>

            <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-white-800">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <h2 className="mb-8 text-2xl font-bold text-gray-800 ">Related articles</h2>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        <article className="max-w-xs">
                            <Link href="#">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1" />
                            </Link>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                                <Link href="#">Our first office</Link>
                            </h2>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                            <Link href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in 2 minutes
                            </Link>
                        </article>
                        <article className="max-w-xs">
                            <Link href="#">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2" />
                            </Link>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                                <Link href="#">Enterprise design tips</Link>
                            </h2>
                            <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                            <Link href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in 12 minutes
                            </Link>
                        </article>
                        <article className="max-w-xs">
                            <Link href="#">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3" />
                            </Link>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 ">
                                <Link href="#">We partnered with Google</Link>
                            </h2>
                            <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                            <Link href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in 8 minutes
                            </Link>
                        </article>
                        <article className="max-w-xs">
                            <Link href="#">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4" />
                            </Link>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 ">
                                <Link href="#">Our first project with React</Link>
                            </h2>
                            <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                            <Link href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in 4 minutes
                            </Link>
                        </article>
                    </div>
                </div>
            </aside>

            <section className="bg-white dark:bg-white-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-blue-500 underline sm:text-4xl ">Sign up for our newsletter</h2>
                        <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label for="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                </div>
                                <div>
                                    <button type="submit" className="py-3 px-5 w-full bg-blue-700 text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <Link href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</Link>.</div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default blog
