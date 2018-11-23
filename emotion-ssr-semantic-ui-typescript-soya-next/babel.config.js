module.exports = function(api) {
    // Cached based on the value of some function. If this function returns a value different from
    // a previously-encountered value, the plugins will re-evaluate.
    api.cache.using(() => process.env.NODE_ENV === 'production');
  
    const presets = ['next/babel', '@zeit/next-typescript/babel'];
  
    const plugins = [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.es', '.es6', '.mjs'],
          alias: {
            'soya-component': './components/soya-component',
          },
        },
      ],
    ];
  
    return {
      presets,
      // plugins,
    };
  };
  