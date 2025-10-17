import type { PortfolioItemDataWrapper } from "~/components/PortfolioItem/PortfolioItem";
import QuietNightImage from "../assets/portfolio-a-quiet-night.png";
import FuturisticWorldImage from "../assets/portfolio-futuristic-world.png";
import LostAndFoundImage from "../assets/portfolio-lost-and-found.png";
import RocketLaunchingImage from "../assets/portfolio-rocket-launching.png"
import UnexpectedlyImage from "../assets/portfolio-unexpectedly.png";
import WhisperOfEnchantedWorldImage from "../assets/portfolio-whisper-of-the-enchanted-world.png";

// TODO: this is mock data fetching
export function fetchPortfolioItemDataList(): PortfolioItemDataWrapper[] {
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