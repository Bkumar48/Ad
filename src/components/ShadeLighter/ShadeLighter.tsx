const ShadeLighter = (hex: string, opacity: number): string => {
    // Remove '#' from hex string and parse it
    const bigint = parseInt(hex.slice(1), 16);
  
    // Extract RGB components
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
  
    // Convert RGB components to RGBA string with the given opacity
    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  
    return rgbaColor;
  };
  
  export default ShadeLighter