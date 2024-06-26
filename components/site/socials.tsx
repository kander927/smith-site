import { FaDiscord, FaGithub, FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SocialsProps {
  username: string;
  github?: string;
  instagram?: string;
  discord: string;
  youtube?: string;
  twitch?: string;
}

export function Socials({
  username,
  github,
  instagram,
  discord,
  youtube,
  twitch
}: SocialsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Socials  <span className='ml-[100px] text-blue-500'>[</span><span className='text-gradient'>{username}</span><span className='text-blue-500'>]</span></CardTitle>
        <CardDescription>
          Check out my socials for contact, or updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1">
        {youtube && (
        <a href={`https://www.youtube.com/@${youtube}`} target="_blank" rel="noopener noreferrer" className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <FaYoutube className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">YouTube</p>
            <p className="text-sm text-muted-foreground">
              Check out my YouTube
            </p>
          </div>
        </a>
        )}
        {twitch && (
        <a href={`https://www.twitch.tv/${twitch}`} target="_blank" rel="noopener noreferrer" className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <FaTwitch className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Twitch</p>
            <p className="text-sm text-muted-foreground">
              Check out my Twitch
            </p>
          </div>
        </a>
        )}
        {github && (
        <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <FaGithub className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">GitHub</p>
            <p className="text-sm text-muted-foreground">
              Check out my GitHub
            </p>
          </div>
        </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="-mx-2 flex items-start space-x-4 rounded-md hover:bg-accent p-2 text-accent-foreground transition-all">
            <FaInstagram className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Instagram</p>
              <p className="text-sm text-muted-foreground">
                Follow my Instagram
              </p>
            </div>
          </a>
        )}
        <a href={`https://discordapp.com/users/${discord}`} target="_blank" rel="noopener noreferrer" className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <FaDiscord className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Discord</p>
            <p className="text-sm text-muted-foreground">
              Add me on Discord
            </p>
          </div>
        </a>
      </CardContent>
    </Card>
  )
}