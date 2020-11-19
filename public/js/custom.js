function LangHref(lang){
    const locationOfUser = location.href
    location.href = `${locationOfUser.replace("?lang=tr", "").replace("?lang=en", "")}?lang=${lang}`
  }