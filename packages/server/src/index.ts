import { ClassificationTypeNames } from '#ts'
import { value } from '#shared/value/value.js'
import { log } from '#@/logger/log.js'

const named: UtilTypes.Named<unknown> = {
  name: 'Shared value',
  value,
}

log(named)
log(ClassificationTypeNames)
