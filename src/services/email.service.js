

const formspreeApiUrl = import.meta.env.VITE_FORMSPREE_URL
console.log("This is the .env imported", formspreeApiUrl);


const sendEmail = async (data) => {
  console.log("This is the .env imported", formspreeApiUrl);
  
  const response = await fetch(`${formspreeApiUrl}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  return response;
}

export {
  sendEmail
}