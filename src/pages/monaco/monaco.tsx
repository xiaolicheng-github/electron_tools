import React, { useEffect, useRef, useState } from "react";
import './monaco.scss';
import HeaderNav from "../../components/header-nav/header-nav";
import * as monaco from 'monaco-editor';

export default function Monaco() {

  const monacoRef = useRef(null);
  const [monacoInstance, setMonacoInstance] = useState<any>();

  useEffect(() => {
    console.log(monacoRef.current);
    const instance = monaco.editor.create(monacoRef.current as any, {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
      language: 'javascript'
    });
    setMonacoInstance(instance);
  }, []);

  return <div className="monaco-page">
    <HeaderNav title="monaco"></HeaderNav>
    <div className="monaco-page-content">
      <div className="monaco-content" ref={monacoRef}></div>
    </div>
  </div>
}
