import React from "react";

const Loading = ({ loading, error, children }) => {
  const elementType = children?.type?.render?.displayName;

  const renderHandler = () => {
    if (elementType === "Button") {
      const cloneButton = React.cloneElement(
        children,
        { disable: "true" },
        "Loading..."
      );

      return (
        <>
          {loading ? (
            cloneButton
          ) : error ? (
            <>
              {children}
              <p>
                <br />
                {error}
              </p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {loading ? (
          <p>loading please wait...</p>
        ) : error ? (
          <p colSpan={3}>{error}</p>
        ) : (
          children
        )}
      </>
    );
  };
  return renderHandler();
};
export default Loading;
