import React from 'react';
import { ControlledEditor, monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';

import solarized from 'monaco-themes/themes/Solarized-light.json';

monaco
  .init()
  .then((monacoInstance) => monacoInstance.editor.defineTheme('solarized', solarized as editor.IStandaloneThemeData));

const App = (): React.ReactElement => (
  <>
    <ControlledEditor
      height="100vh"
      language="markdown"
      options={{
        folding: false,
        wordWrap: 'on',
      }}
      theme="solarized"
    />
  </>
);

export default App;
