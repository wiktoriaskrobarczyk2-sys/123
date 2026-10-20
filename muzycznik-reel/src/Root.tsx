import { SolariumCompositions } from './cen/solarium/SolariumReel';
import { MyComposition } from "./Composition";
import { CenCompositions } from "./cen/CenReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <CenCompositions />
      <SolariumCompositions />
    </>
  );
};
