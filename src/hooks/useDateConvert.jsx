const useDateConvert = () => {
  const dateConvert = (dd, mm, yyyy) => {
    const day = parseInt(dd);
    const month = parseInt(mm);
    const year = parseInt(yyyy);

    const value = new Date(year,month,day).getTime()

    return value;
  };

  return dateConvert;
};

export default useDateConvert;
