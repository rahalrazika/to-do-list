const customAlert = (message) => {
  const html = `
    <div class="relative top-0 w-full h-10 text-center bg-red-700 text-white transition-all">
      ${message}
    </div>
  `;

  return html;
};

export default customAlert;