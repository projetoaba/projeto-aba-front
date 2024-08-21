import { Button } from '@/components/shared/ui/button';

import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export function LandingHeader() {
  return (
    <LandingPrimaryImageCtaSection
      title="Capture perfect screenshots in seconds"
      description="With a single API call, you can let your screenshot dreams fly, leaving the grunt work to us."
      imageSrc="/static/images/product-sample.webp"
      imageAlt="Sample image"
      withBackground
      leadingComponent={<LandingProductHuntAward />}
    >
      <Button size="xl" asChild>
        <a href="#">Sign up</a>
      </Button>

      <Button size="xl" variant="outlinePrimary">
        <a href="#">See demo</a>
      </Button>
    </LandingPrimaryImageCtaSection>
  );
}

export function LandingFeatures() {
  const keyPoints = [
    {
      title: 'Fast',
      description:
        'Capture screenshots in seconds. No more waiting. No more fiddling with scripts.',
    },
    {
      title: 'Secure',
      description:
        '100% encrypted and secure. Your data is safe with us, always. Privacy first.',
    },
    {
      title: 'Support',
      description:
        '24/7 customer support. We are here to help you at any time of the day. Just ask.',
    },
  ];

  return (
    <LandingProductFeature
      title="Crystal clear captures"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints keyPoints={keyPoints} />

          <Button className="mt-8" asChild>
            <a href="#">Try now for free</a>
          </Button>

          <p className="text-sm">Premium support included.</p>
        </>
      }
      imageSrc="/static/images/backdrop-8.webp"
      imageAlt="Screenshot of the product"
      imagePosition="left"
      imagePerspective="right"
    />
  );
}
