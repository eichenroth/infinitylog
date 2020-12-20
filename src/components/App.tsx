import React from 'react';
import Editor from '@monaco-editor/react';

const App = (): React.ReactElement => (
  <>
    <Editor
      height="100vh"
      language="markdown"
      options={{
        // hides line numbers
        lineNumbers: 'off',
        // hide folding option
        folding: false,
        // automatical line break
        wordWrap: 'on',
      }}
    />
  </>
);

export default App;
