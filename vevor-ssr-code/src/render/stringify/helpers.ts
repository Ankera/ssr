export const convertAttrToString = (attr: any) => {
  const results = [];
  const keys = Object.keys(attr);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    results.push(` ${key}="${attr[key]}"`);
  }
  return results.join('');
};

export const getHeadHtml = (heads: any[]) => {
  if(!Array.isArray(heads)){
    heads = []
  }
  const results = [];
  for (let i = 0; i < heads.length; i++) {
    const h = heads[i];
    if (h.type === 'meta') {
      results.push(`<meta${convertAttrToString(h.props)}>`);
    }
    if (h.type === 'title') {
      results.push(`<title>${h.props.children}</title>`);
    }
    if (h.type === 'link') {
      results.push(`<link${convertAttrToString(h.props)}>`);
    }
    if (h.type === 'script') {
      results.push(`<script${convertAttrToString(h.props)}></script>`);
    }
  }
  return results.join('');
};
