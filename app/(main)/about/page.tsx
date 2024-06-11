import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import {
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiElectron,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTwitch,
  SiTypescript,
  SiYoutube,
} from "react-icons/si";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <div className="absolute inset-0">
        {/* <BackgroundBeams /> */}
        <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={2}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
            fullScreen={true}
          />
      </div>
      <div className="p-8 rounded-lg border-2 border-gray-700 bg-black max-w-lg w-full z-10 ">
        <h1 className="text-3xl font-bold mb-6 text-gradient text-center">
          About Us
        </h1>

        <div className="flex justify-between items-center mb-">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl text-gradient font-semibold mb-7 mt-4">
              soapreal_
            </h1>
            <Drawer>
              <DrawerTrigger asChild>
                <div className="rounded-md relative w-32 h-32">
                  <Image
                    src="/smithpfp.png"
                    alt="soapreal pfp"
                    width={256}
                    height={256}
                    className="scale rounded-md"
                  />
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle className="text-gradient text-2xl font-bold">
                      soapreal_
                    </DrawerTitle>
                    <DrawerDescription className="text-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-30">
                      <div className="flex flex-col items-start backdrop-filter backdrop-blur-lg bg-opacity-30">
                        <span className="mr-2 text-xl font-semibold text-white mb-4">
                          I am a big sexy guy
                        </span>
                        <span className="mr-2 text-2xl text-gradient">
                          Stuff I Do
                        </span>
                        <ul className="list-disc pl-6">
                          <li className="flex items-center">
                            <span className="mr-1 text-lg text-red-700 font-medium">
                              - YouTube
                            </span>
                            <SiYoutube className="inline-block align-middle text-red-700" />
                          </li>
                          <li className="flex items-center">
                            <span className="mr-1 text-lg text-purple-800 font-medium">
                              - Twitch
                            </span>
                            <SiTwitch className="inline-block align-middle text-purple-800" />
                          </li>
                        </ul>
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>

                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2"></div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl text-gradient font-semibold mb-7 mt-4">
              5skn
            </h1>
            <Drawer>
              <DrawerTrigger asChild>
                <div className="relative w-32 h-32">
                  <Image
                    src="/5skndark.png"
                    alt="5skn pfp"
                    width={256}
                    height={256}
                    className="scale rounded-md"
                  />
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle className="text-2xl text-gradient font-bold">
                      5skn
                    </DrawerTitle>
                    <DrawerDescription className="text-gray-600">
                      <div className="flex flex-col items-start">
                        <span className="mr-2 text-xl text-white font-semibold mb-4">
                          I am big cool hacker coder man 
                        </span>

                        <span className="mr-2 text-2xl text-gradient">
                          Stuff I Do
                        </span>
                        <ul className="list-disc pl-6">
                          <li className="flex items-center">
                            <span className="mr-1 text-lg text-blue-500 font-medium">
                              - Photoshop
                            </span>
                            <SiAdobephotoshop className="inline-block align-middle text-blue-500" />
                          </li>
                          <li className="flex items-center">
                            <span className="mr-1 text-lg text-pink-500 font-medium">
                              - Illustrator
                            </span>
                            <SiAdobeillustrator className="inline-block align-middle text-pink-500" />
                          </li>
                          <li className="flex items-center">
                            <span className="mr-1 text-lg text-purple-500 font-medium">
                              - Premiere Pro
                            </span>
                            <SiAdobepremierepro className="inline-block align-middle text-purple-500" />
                          </li>
                          <li className="flex items-center">
                            <span className="mr-1 text-lg text-yellow-500 font-medium">
                              - Lightroom
                            </span>
                            <SiAdobelightroom className="inline-block align-middle text-yellow-500" />
                          </li>
                          <li className="flex items-center">
                            <span className="mr-1 text-lg text-green-500 font-medium">
                              - Python
                            </span>
                            <SiPython className="inline-block align-middle text-green-500" />
                          </li>
                        </ul>
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>

                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2"></div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
