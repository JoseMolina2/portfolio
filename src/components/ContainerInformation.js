function ContainerInformation({ information }) {
  return (
    <div className="w3-border-bottom w3-border-gray">
      {information.map(({ id, description, icon }) => {
        return (
          <p key={id}>
            <i
              className={`w3-margin-right w3-large w3-text-teal fa fa-fw fa-${icon}`}
            ></i>
            {description}
          </p>
        );
      })}
    </div>
  );
}

export default ContainerInformation;
