const form = document.getElementById('prompt-form');
const output = document.getElementById('output');
const fields = ['subject', 'category', 'quality', 'aesthetics', 'negative'];
const LS_PREFIX = 'promptbuilder_';
const LS_SAVED = LS_PREFIX + 'saved_prompts';
const DEBOUNCE_MS = 300;
let debounceTimers = {};

// Restore from localStorage
fields.forEach((id) => {
	const saved = localStorage.getItem(LS_PREFIX + id);
	if (saved !== null) {
		document.getElementById(id).value = saved;
	}
});

function buildPrompt() {
	const values = fields.map((id) => document.getElementById(id).value.trim());
	let prompt = '';
	if (values[0]) prompt += values[0] + '\n';
	if (values[1]) prompt += values[1] + '\n';
	if (values[2]) prompt += values[2] + '\n';
	if (values[3]) prompt += values[3] + '\n';
	if (values[4]) prompt += 'Negative: ' + values[4];
	output.value = prompt.trim();
}

// Debounced save to localStorage
function saveFieldDebounced(id, value) {
	if (debounceTimers[id]) clearTimeout(debounceTimers[id]);
	debounceTimers[id] = setTimeout(() => {
		localStorage.setItem(LS_PREFIX + id, value);
	}, DEBOUNCE_MS);
}

// Listen for input changes on each field
fields.forEach((id) => {
	document.getElementById(id).addEventListener('input', (e) => {
		saveFieldDebounced(id, e.target.value);
	});
});

form.addEventListener('input', buildPrompt);
// Initialize
buildPrompt();

// --- Save/Clear and Saved Prompts Logic ---
const saveBtn = document.getElementById('save-prompt');
const clearBtn = document.getElementById('clear-fields');
const savedList = document.getElementById('saved-prompts-list');

function getCurrentFields() {
	const obj = {};
	fields.forEach((id) => {
		obj[id] = document.getElementById(id).value;
	});
	obj['prompt'] = output.value;
	return obj;
}

function setFieldsFromObj(obj) {
	fields.forEach((id) => {
		document.getElementById(id).value = obj[id] || '';
		localStorage.setItem(LS_PREFIX + id, obj[id] || '');
	});
	buildPrompt();
}

function getSavedPrompts() {
	try {
		return JSON.parse(localStorage.getItem(LS_SAVED)) || [];
	} catch {
		return [];
	}
}

function setSavedPrompts(list) {
	localStorage.setItem(LS_SAVED, JSON.stringify(list));
}

function renderSavedPrompts() {
	const prompts = getSavedPrompts();
	savedList.innerHTML = '';
	if (!prompts.length) {
		savedList.innerHTML = '<li style="color:#888;">No saved prompts yet.</li>';
		return;
	}
	prompts.forEach((item, idx) => {
		const li = document.createElement('li');
		li.className = 'saved-prompt-item';
		const pre = document.createElement('pre');
		pre.textContent = item.prompt;
		li.appendChild(pre);
		const actions = document.createElement('div');
		actions.className = 'saved-prompt-actions';
		const restoreBtn = document.createElement('button');
		restoreBtn.textContent = 'Restore';
		restoreBtn.onclick = () => setFieldsFromObj(item);
		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete';
		deleteBtn.onclick = () => {
			const updated = getSavedPrompts();
			updated.splice(idx, 1);
			setSavedPrompts(updated);
			renderSavedPrompts();
		};
		actions.appendChild(restoreBtn);
		actions.appendChild(deleteBtn);
		li.appendChild(actions);
		savedList.appendChild(li);
	});
}

saveBtn.onclick = () => {
	const obj = getCurrentFields();
	if (!obj.prompt) return;
	const prompts = getSavedPrompts();
	prompts.unshift(obj); // add to top
	setSavedPrompts(prompts);
	renderSavedPrompts();
};

clearBtn.onclick = () => {
	fields.forEach((id) => {
		document.getElementById(id).value = '';
		localStorage.removeItem(LS_PREFIX + id);
	});
	buildPrompt();
};

// Initial render
renderSavedPrompts();
