import { ClassificationTypeNames } from '#ts'
import { value } from '#common/value/value.js'
import { log } from '#@/logger/log.js'

const named: UtilTypes.Named<unknown> = {
  name: 'Common value',
  value,
}

log(named)
log(ClassificationTypeNames)
