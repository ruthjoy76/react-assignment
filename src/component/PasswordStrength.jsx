import React from 'react'

function PasswordStrength(props) {
  
  const { password } = props;
  let strength = '';

  if (password.length < 4) {
    strength = 'weak';
  } else if (password.length >= 4 && password.length <= 7) {
    strength = 'medium';
  } else {
    strength = 'strong';
  }

  return (
    <div>
      <p> The password strength is {strength}.</p>
    </div>
  );
}

export default PasswordStrength;
