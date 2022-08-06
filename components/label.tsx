interface LabelProps {
  children: React.ReactNode;
  htmlFor: HTMLLabelElement['htmlFor'];
}

export const Label = ({ children, htmlFor }: LabelProps): JSX.Element => {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.displayName = 'Label';
