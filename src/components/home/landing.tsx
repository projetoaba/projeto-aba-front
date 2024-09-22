import { Button } from '@/components/shared/ui/button';

import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export function LandingHeader() {
  return (
    <LandingPrimaryImageCtaSection
      title="Análise de Evolução: Mais do que Perguntas e Respostas"
      description="Prontuário eletrônico, Programa de intervenção, Análises com VB-MAPP, AFLS, ABLLS e outros"
      imageSrc="/static/cover.png"
      imageAlt="Sample image"
      withBackground
    >      
      <Button size="lg" asChild>
        <a href="#">Cadastrar</a>
      </Button>

      <Button size="lg" variant="outline">
        <a href="#">Converse conosco</a>
      </Button>
    </LandingPrimaryImageCtaSection>
  );
}

export function LandingFeatures() {
  const keyPoints = [
    {
      title: 'Gestão de acessos',
      description:
        'Acompanhe o avanço de cada um dos seus pacientes com visão de coodenadores e supervisores',
    },
    {
      title: 'Avaliações',
      description:
        'Aplique o VBMAPP de maneira online e simples',
    },
    {
      title: 'Programa de intervenção',
      description:
        'Crie Planos de Intervenção personalizados',
    },
  ];

  return (
    <LandingProductFeature
      title="Algumas das funcionalidades"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints keyPoints={keyPoints} />

          <Button className="mt-8" asChild>
            <a href="#">Veja como funciona</a>
          </Button>
        </>
      }
      imageSrc="/static/macbook.png"
      imageAlt="Screenshot of the product"
      imagePosition="left"
      imagePerspective="right"
    />
  );
}
