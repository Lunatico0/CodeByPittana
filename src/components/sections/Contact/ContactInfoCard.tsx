import ButtonSecondary from '@ui/ButtonSecondary';
import { ContactData } from '@data/contact';
import { useCVModal } from "@context/CVModalContext";
import { techIcons } from '@icons/techIcons';

const ContactInfoCard: React.FC = () => {
  const { openModal } = useCVModal();
  const key = 'diploma';
  const Icon = techIcons[key];

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
        {ContactData.heading}
      </h2>
      <h3 className="text-xl md:text-2xl font-semibold text-accent mb-6">
        {ContactData.subheading}
      </h3>
      <p className="text-text/70 mb-8 max-w-md">
        {ContactData.paragraph}
      </p>

      {/* Links Sociales */}
      <div className='flex items-center'>
        <div className="flex flex-col space-y-1 max-w-60">
          {ContactData.socialLinks.map((link) => {
            const IconComponent = link.Icon;

            return (
              <ButtonSecondary
                key={link.name}
                as="a"
                href={link.href}
                className="flex justify-start items-center gap-3"
              >
                {IconComponent && (
                  <IconComponent className="w-5 h-5 text-accent/80" />
                )}

                <span>{link.name}</span>
              </ButtonSecondary>
            )
          })}
          <ButtonSecondary
            as="button"
            onClick={openModal}
            className='flex gap-3'
          >
            <div className='text-tertiary'>
              {Icon && Icon}
            </div>
            Descargar CV
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
