import { FeatureCheck } from '../common/Feature';
import { StartButton } from '@/components/common/Button/Button';
import { GradientText } from '../common/Text';
import { NewBadge } from '../common/Badge';

interface HeroTitleProps extends BaseProps {
  children: React.ReactNode;
}

interface HeroSubtitleProps extends BaseProps {
  children: React.ReactNode;
}

interface HeroDescriptionProps extends BaseProps {
  children: React.ReactNode;
}

interface HeroActionsProps extends BaseProps {
  buttonText: string;
}

interface HeroFeaturesProps extends BaseProps {
  features: string[];
}

interface HeroContentProps extends BaseProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  features: string[];
}

export const HeroTitle: React.FC<HeroTitleProps> = ({
  children,
  className,
}) => (
  <h1 className={`text-5xl lg:text-7xl font-bold tracking-tight ${className}`}>
    <GradientText>{children}</GradientText>
  </h1>
);

export const HeroSubtitle: React.FC<HeroSubtitleProps> = ({
  children,
  className,
}) => (
  <h2 className={`mt-4 text-3xl font-bold text-slate-900 ${className}`}>
    {children}
  </h2>
);

export const HeroDescription: React.FC<HeroDescriptionProps> = ({
  children,
  className,
}) => (
  <p className={`mt-6 text-lg text-slate-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const HeroActions: React.FC<HeroActionsProps> = ({
  buttonText,
  className,
}) => (
  <div
    className={`mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 ${className}`}
  >
    <StartButton hasIcon={true}>{buttonText}</StartButton>
  </div>
);

export const HeroFeatures: React.FC<HeroFeaturesProps> = ({
  features,
  className,
}) => (
  <div
    className={`mt-8 flex flex-col sm:flex-row items-start gap-6 ${className}`}
  >
    {features.map((feature, index) => (
      <FeatureCheck key={index} text={feature} />
    ))}
  </div>
);

export const HeroContent: React.FC<HeroContentProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  features,
  className,
}) => (
  <div className={`relative z-10 max-w-2xl ${className}`}>
    <NewBadge />
    <HeroTitle>{title}</HeroTitle>
    <HeroSubtitle>{subtitle}</HeroSubtitle>
    <HeroDescription>{description}</HeroDescription>
    <HeroActions buttonText={buttonText} />
    <HeroFeatures features={features} />
  </div>
);
