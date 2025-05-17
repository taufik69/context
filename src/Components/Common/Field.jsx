import React from "react";

const Field = ({ label, children, error, htmlFor }) => {
  const getChildId = (children) => {
    if (React.isValidElement(children)) {
      const child = React.Children.only(children);
      if (child.props.id) {
        return child.props.id;
      }
    }
    return null;
  };
  const id = htmlFor || getChildId(children);
  return (
    <div>
      <div class="form-control">
        {label && (
          <label class="auth-label" htmlFor={id}>
            {label}
          </label>
        )}
        {children}
        {!!error && <p class="text-red-500 text-xs mt-1">{error.message}</p>}
      </div>
    </div>
  );
};

export default Field;
