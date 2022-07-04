import NumberFormat from 'react-number-format';
import { useState } from 'react';
import { cpf } from 'cpf-cnpj-validator';

const DocumentNumberMasks = {
  CPF: '###.###.###-##',
  CNPJ: '##.###.###/####-##',
}

const DocumentInput = () => {
  const [documentMask, setDocumentMask] = useState(DocumentNumberMasks.CPF)
  const [documentNumber, setDocumentNumber ] = useState('')

  const handleDocumentChange = ({ target: { value } }) => {
  const inputValue = value.replace(/[^0-9]/g, '');

    if (inputValue.length < 11) setDocumentMask(DocumentNumberMasks.CPF);

    if (inputValue.length === 11 && !cpf.isValid(inputValue))
      setDocumentMask(DocumentNumberMasks.CNPJ);

    setDocumentNumber(inputValue);
  };

  const handlePaste = ({ clipboardData }) => {
    const value = clipboardData.getData('Text').replace(/[^0-9]/g, '');

    const mask = value.length > 11 ? DocumentNumberMasks.CNPJ : DocumentNumberMasks.CPF;
    setDocumentMask(mask);
  };

  return (
    <div>
      <NumberFormat
        placeholder={'Insira CPF ou CNPJ'}
        mask="_"
        format={documentMask}
        onPaste={handlePaste}
        onChange={handleDocumentChange}
        value={documentNumber}
        style={{ width: '180px', height: '30px', fontSize: '20px', padding: '5px' }}
      />
    </div>
  )
}

export default DocumentInput;