"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";


type IconName = 'clock' | 'help-circle' | 'gamepad-2' | 'calendar' | 'users'

const iconMap: Record<string, IconName> = {
    '0': 'calendar',
    '1': 'gamepad-2',
    '2': 'help-circle',
    '3': 'users',
    'default': 'help-circle',
}

const iconComponentMap: Record<IconName, keyof typeof Icons> = {
    clock: 'Clock',
    'help-circle': 'HelpCircle',
    'gamepad-2': 'Gamepad2',
    calendar: 'Calendar',
    users: 'Users',
}

function getIcon(iconName: IconName) {
    const IconComponent = Icons[iconComponentMap[iconName] as keyof typeof Icons] as React.ComponentType<{
        className?: string
        size?: number
    }>
    return IconComponent || Icons.HelpCircle
}

export default function FAQSection() {

    const faqItems = [
        {
            q: "Do I need to book a table?",
            a: "We recommend booking ahead for groups, billiard sessions, or weekend visits. Walk-ins are always welcome for coffee and quick games!"
        },
        {
            q: "What activities do you offer?",
            a: "PlayStation 5, billiard & snooker tables, 50+ board games, karaoke nights, live music showcases, and a cozy co-working space—perfect for chilling with friends or flying solo."
        },
        {
            q: "Can I host events here?",
            a: "Absolutely! We host birthdays, after-work gatherings, study groups, and private events. Contact us to customize your perfect celebration or get-together."
        },
        {
            q: "Do you have live music?",
            a: "Yes! We regularly host live music performances, karaoke nights, and artist showcases. Follow us on social media to stay updated on upcoming events and featured performers."
        }
    ];

    return (
        <section id="faq" className="relative py-24 overflow-hidden [clip-path:inset(0)]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/bg5.webp"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 70%' }}
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="mx-auto max-w-5xl px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-10 md:flex-row md:gap-16"
                >
                    <div className="md:w-1/3">
                        <div className="sticky top-20 text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-6 md:mb-8"
                            >
                                <h2 className="w-fit block mx-auto md:mx-0 text-6xl md:text-8xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 md:whitespace-nowrap md:pr-10">Got Questions?</h2>
                            </motion.div>
                            <p className="text-muted-foreground mt-4 font-body text-lg">
                                Everything you need to know about visiting us.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3 md:ml-8 lg:ml-12">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2"
                        >
                            {faqItems.map((faq, index) => {
                                const iconName = iconMap[index.toString()] || iconMap.default
                                const IconComponent = getIcon(iconName)
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <AccordionItem
                                            value={`item-${index}`}
                                            className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/50 to-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border border-white/10 hover:border-white/20 px-4 last:border-b overflow-hidden group"
                                        >
                                            {/* Subtle gradient overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-red-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-red-600/5 transition-all duration-500 pointer-events-none" />

                                            <AccordionTrigger className="relative cursor-pointer items-center py-5 hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                                                        <IconComponent
                                                            className="m-auto size-4 text-blue-400 group-hover:text-blue-300 transition-colors"
                                                        />
                                                    </div>
                                                    <span className="text-base font-display font-semibold text-white/90 group-hover:text-white transition-colors">{faq.q}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-5 relative">
                                                <div className="px-9">
                                                    <p className="text-base font-display text-gray-300 leading-relaxed">{faq.a}</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </motion.div>
                                )
                            })}
                        </Accordion>
                    </div>
                </motion.div>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqItems.map(item => ({
                            "@type": "Question",
                            "name": item.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.a
                            }
                        }))
                    })
                }}
            />
        </section>
    );
}
