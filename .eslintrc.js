module.exports = {
	env: { // Списокк сред выполнения кода
  	es2022 : true,
  	browser: true,
  	node   : true,
	},
	extends: [ // Наборы правил, каждый последующий перезаписывает предыдущий
		'airbnb',
	],
	plugins: [

	],
	rules: { // Кастомные правила
		// no var
		'no-var'                 : 'error',
		// Убирает необязательные ;
		'semi'                   : ['error', 'never',],
		'semi-style'             : ['error', 'first',],
		// Табы
		'indent'                 : ['error', 'tab',],
		'no-tabs'                : 'off',
		// Дробные числа .7, 3.
		'no-floating-decimal'    : 'off',
		// Запрещает константы в выражениях
		'no-constant-condition'  : 'error',
		// Убирает лишние пробелы
		'no-multi-spaces'        : 'error',
		// Убирает лишние пробелы в ()
		'space-in-parens'        : 'error',
		// Максимальное количество пустых линий подряд
		'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 3},],
		// const если нет повторных присвоений
		'prefer-const'           : 'error',
		// Нельзя использовать переменны до объявления
		'no-use-before-define'   : 'error',
		// Запятая в конце для массивов, объектов и функций
		'comma-dangle'           : ['error', {
			arrays   : 'always',
			objects  : 'always-multiline',
			imports  : 'never',
			exports  : 'never',
			functions: 'always-multiline',
		},],
		// Одно объявление переменных на блок
		'one-var'                     : ['error', 'consecutive',],
		'one-var-declaration-per-line': ['error', 'initializations',],
		// Всегда требовать пробелы в выражениях { return 1; }
		'block-spacing'               : ['error', 'always',],
		// Разрешает писать так } else {
		'brace-style'                 : ['error', '1tbs', {allowSingleLine: true},],
		// Завершающая пустая строка
		'eol-last'                    : ['error', 'always',],
		// При переносе строк, точка принадлежит свойству
		'dot-location'                : ['error', 'property',],
		// Выравнивание ключей key    : value
		//                     keylong: value
		'key-spacing'                 : ['error', {
			align: {
				beforeColon: false,
				afterColon : true,
				on         : 'colon',
				mode       : 'strict',
			},
		},],
		// Кавычки '
		'quotes'                       : ['error', 'single', {avoidEscape: true},],
		'jsx-quotes'                   : ['error', 'prefer-single',],
		// Кавычки для свойств
		'quote-props'                  : ['error', 'consistent-as-needed',],
		// Тип окончаний
		'linebreak-style'              : ['error', 'unix',],
		// Максимальная длина строки кода
		'max-len'                      : ['error', {code: 100, ignoreStrings: true, ignoreUrls: true},],
		// Убирает лишние скобки
		'no-extra-parens'              : ['error', 'all', {enforceForFunctionPrototypeMethods: false},],
		// Убирает ненужные пробелы
		'no-trailing-spaces'           : 'error',
		// Запрещает пробелы перед свойствами foo.bar
		'no-whitespace-before-property': 'error',
		// Пробелы в объектах {'foo': 'bar'};
		'object-curly-spacing'         : ['error', 'never',],
		// Пробел в комментариях //_something
		'spaced-comment'               : ['error', 'always',],
	},
}
