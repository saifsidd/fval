"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Flame, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Modal, ModalContent } from "@/components/ui/modal"
import { AboutContent } from "@/components/about-content"

export default function AntiValentines() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-red-900/50 relative z-10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NkvXz8PzeLVDwSw3z5zKzitQtYMsGQ.png"
              alt="Heartbreak Mascot"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-xl">Fuck Valentines Alliance</span>
            <a href="https://discord.com/invite/ceZMNJDF" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10">
              Join the Rebellion
            </Button>
          </a>
        </nav>
      </header>

      <main>
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rxX8y3v81T0SQxxPN6YWv2Ey9R0Tr1.png"
            alt="Lonely figure with broken heart balloon"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                Love is lost, but $FVAL stands tall.
              </h1>
              <p className="text-xl md:text-2xl text-red-200 mb-12 drop-shadow-lg">
                Join the movement to reject commercialized romance and celebrate authenticity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://discord.gg/ceZMNJDF" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-red-700/90 hover:bg-red-800 text-white backdrop-blur-sm"
                  >
                    Join the Movement
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600/50 text-red-100 hover:bg-red-600/20 backdrop-blur-sm"
                  onClick={() => setIsAboutOpen(true)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="mascot" className="py-20 bg-gradient-to-b from-red-950/50 to-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NkvXz8PzeLVDwSw3z5zKzitQtYMsGQ.png"
                alt="Heartbreak Mascot"
                width={200}
                height={200}
                className="mx-auto mb-8"
              />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">You&apos;re Not Alone</h2>
              <p className="text-red-200">
                Join thousands of others who choose self-love over commercial expectations. Our community stands
                together against the Valentine&apos;s industry.
              </p>
            </div>
          </div>
        </section>

        <section id="why" className="bg-gradient-to-b from-red-950/50 to-black py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Valentine&apos;s Day Sucks</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/50 border-red-900">
                <CardContent className="p-6">
                  <Flame className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Commercialization</h3>
                  <p className="text-red-200">
                    Love shouldn&apos;t come with a price tag. Reject the corporate manipulation of your emotions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-red-900">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Inclusivity Issues</h3>
                  <p className="text-red-200">
                    Traditional Valentine&apos;s Day excludes many forms of love and relationship styles.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-red-900">
                <CardContent className="p-6">
                  <Share2 className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Mental Health</h3>
                  <p className="text-red-200">
                    The pressure to conform to romantic ideals can be damaging to mental well-being.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <Modal open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <ModalContent>
          <AboutContent />
        </ModalContent>
      </Modal>

      <footer className="border-t border-red-900/50 py-6">
        <div className="container mx-auto px-4 text-center text-red-400 text-sm">
          <p className="flex items-center justify-center gap-1">
            <span>&copy;</span> 2025 Anti-Heartache Alliance. All rights liberated.
          </p>
        </div>
      </footer>

    </div>
  )
}

