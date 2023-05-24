import { Input } from '@angular/core';
import { Deserializable } from '../models/deserializable.model';

export class Account implements Deserializable {
    
    public id: number;
    public account: string;
    public balance: number;
    public description: string;

    deserialize(input: any): this {
      Object.assign(this, input);
      return this;
    }
    
  }
  