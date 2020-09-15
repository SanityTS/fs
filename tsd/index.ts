import * as fs from '../src/fs'
import { expectType } from '@sanity-ts/tsd'
import { TaskEither } from 'fp-ts/lib/TaskEither'

expectType<TaskEither<Error, string>>(fs.readFile('path', 'utf8'))
