import { IFunction } from 'const/types';
import { useEffect } from 'react';

export default function useEffectOnce(callback: IFunction) {
  useEffect(() => {
    callback();
  }, []);
}
