import type { PortfolioCardDataWrapper } from "~/components/PortfolioCard/PortfolioCard";
import QuietNightImage from "../assets/portfolio-a-quiet-night.png";
import FuturisticWorldImage from "../assets/portfolio-futuristic-world.png";
import LostAndFoundImage from "../assets/portfolio-lost-and-found.png";
import RocketLaunchingImage from "../assets/portfolio-rocket-launching.png"
import UnexpectedlyImage from "../assets/portfolio-unexpectedly.png";
import WhisperOfEnchantedWorldImage from "../assets/portfolio-whisper-of-the-enchanted-world.png";
import type { PortfolioPageData } from "~/components/PortfolioPage/PortfolioPage";

// TODO: this is mock data fetching
export function fetchPortfolioCardDataList(): PortfolioCardDataWrapper[] {
    return [
        {
            data: {
                image: UnexpectedlyImage,
                title: 'Unexpectedly',
                description: 'Created modeling, texturing, animating, rigging, lighting, and rendering.',
                programUsed: 'MAYA, Premiere Pro, Arnold renderer'
            }
        },
        {
            data: {
                image: LostAndFoundImage,
                title: 'Lost and Found',
                description: 'Used motion capture in the green screen room for characters\' movements.',
                programUsed: 'Unreal Engine, MAYA, Xsens, Premiere Pro, Arnold renderer'
            }
        },
        {
            data: {
                image: WhisperOfEnchantedWorldImage,
                title: 'Whispers of the Enchanted World',
                description: 'Created the environment and designed the scene.',
                programUsed: 'Unreal Engine 5 and Premiere Pro'
            }
        },
        {
            data: {
                image: FuturisticWorldImage,
                title: 'Futuristic World',
                description: 'Created modeling, texturing, lighting, and rendering.',
                programUsed: 'MAYA'
            }
        },
        {
            data: {
                image: QuietNightImage,
                title: 'A Quiet Night',
                description: 'ADD DESCRIPTION',
                programUsed: 'MAYA, Premiere Pro, Arnold renderer'
            }
        },
        {
            data: {
                image: RocketLaunchingImage,
                title: 'Rocket Launching',
                description: 'Fire, Smoke, Water & Ember VFX',
                programUsed: 'Houdini, Deadline'
            }
        },
    ];
}

export function fetchPortfolioPageData(title: string): PortfolioPageData {
    const allPortfolioPageDataList: PortfolioPageData[] = [
        {
            title: 'Unexpectedly',
            images: [UnexpectedlyImage],
            typeAndLength: '3D animation, 2 min 42 sec',
            programUsed: 'MAYA, Premiere Pro, Arnold renderer',
            projectHighlight: 'Created modeling, texturing, animating, rigging, lighting, and rendering.',
            projectDuration: '5 weeks',
            description: 'My work tells the story of navigating life without knowing the future, continuously facing challenges, walking our own paths, and doing our best. In the piece, a butterfly starts off on a journey, unsure of what lies ahead. One day, the butterfly stumbles upon a globe, something entirely unfamiliar. Despite its fear and uncertainty, the butterfly decides to venture into the globe. As it delves deeper, it discovers a world completely different from the one it knew. Following the guidance of this new world, the butterfly eventually meets the friends it had longed for. This work reflects my belief that life is much like this journey. We may not know what the future holds, but if we keep moving forward and keep challenging ourselves, we can find what we are searching for and achieve our dreams. The message is that even though the path may be uncertain or scary at times, if we continue to take steps toward our goals, we will eventually find what we seek.'
        },
        {
            title: 'Lost and Found',
            images: [LostAndFoundImage],
            typeAndLength: '3D animation, 2 min 43 sec',
            programUsed: 'Unreal Engine, MAYA, Xsens, Premiere Pro, Arnold renderer',
            projectHighlight: 'Utilized motion capture in the green screen room for the glowing Metahuman and magician characters’ movements. Created character, special effects, texturing, animating, rigging, lighting, and rendering.',
            projectDuration: '4 weeks',
            description: '“Lost and Found” is a magical, story-based project about a person lost at sea who discovers a glowing, unreal land where stars are born. It’s a mix of fantasy and adventure, showing themes of curiosity and wonder. The story follows a lonely traveler in a rowboat, stuck in the middle of a huge ocean. One night, they see a sky full of falling stars, shining like fireworks. Drawn to the light, they row toward it. A strange sign saying “Slow” pops up from the water, but they ignore it, too excited to stop. Soon, they reach a sparkling shore. The land glows with starlight, with a cozy house and a planet floating above. Magicians wave wands, creating stars. It’s like a small world but feels massive, alive with magic. This adventure shows how curiosity can lead to incredible discoveries. There’s a planet that seems to be watching all these things happen, like a security camera. What will happen next?'
        },
        {
            title: 'Whispers of the Enchanted World',
            images: [WhisperOfEnchantedWorldImage],
            typeAndLength: '3D animation, 42 sec',
            programUsed: 'Unreal Engine 5 and Premiere Pro',
            projectHighlight: 'Created the environment and designed the scene.',
            projectDuration: '2-3 weeks',
            description: 'This is a trailer for a later animation, where it discovers a land of enchantment and mystery in a hidden world where magic breathes within nature. Explore lush landscapes, uncover forgotten secrets, and experience a journey where the lines between reality and magic blur, revealing an ancient power waiting to be unlocked.'
        },
        {
            title: 'Futuristic World',
            images: [FuturisticWorldImage],
            typeAndLength: '3D modeling',
            programUsed: 'MAYA',
            projectHighlight: 'Created modeling, texturing, lighting, and rendering.',
            projectDuration: '1 week',
            description: ''
        },
        {
            title: 'A Quiet Night',
            images: [QuietNightImage],
            typeAndLength: '3D animation, 33 sec',
            programUsed: 'MAYA, Premiere Pro, Arnold renderer',
            projectHighlight: 'Directed & Created by Luna Kim',
            projectDuration: '1 week',
            description: 'On Christmas night, while the family is asleep, a young boy who still believes in Santa leaves a gingerbread man cookie by the fireplace. Later, an ornament falls from the Christmas tree. The cookie, noticing it, quietly places the ornament back on the tree. It’s a slightly spooky yet heartwarming story that mixes the magic of Christmas with a sense of mystery.'
        },
        {
            title: 'Rocket Launching',
            images: [RocketLaunchingImage],
            typeAndLength: 'Fire, Smoke, Water & Ember VFX 10 sec',
            programUsed: 'Houdini, Deadline',
            projectHighlight: 'Created and Directed by Luna Kim',
            projectDuration: 'Work in Progress (first project)',
            description: ''
        },
    ];

    return allPortfolioPageDataList.find((data) => data.title === title)!;
}