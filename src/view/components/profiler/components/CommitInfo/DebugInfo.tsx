import { h, Fragment } from "preact";
import { SidebarPanel } from "../../../sidebar/SidebarPanel";
import { useStore, useObserver } from "../../../../store/react-bindings";
import { getRoot } from "../../flamegraph/FlamegraphStore";

const TimeRange = ({ from, to }: { from: number; to: number }) => (
	<Fragment>
		{from.toFixed(2)} -&gt; {to.toFixed(2)} | {(to - from).toFixed(2)}
	</Fragment>
);

export function DebugProfilerInfo() {
	const store = useStore();
	const commit = useObserver(() => store.profiler.activeCommit.$);
	const selected = useObserver(() => store.profiler.selectedNode.$);
	const isRecording = useObserver(() => store.profiler.isRecording.$);
	const pos = useObserver(() => {
		const s = store.profiler.selectedNodeId.$;
		return store.profiler.flamegraphNodes.$.get(s);
	})!;

	if (commit === null || isRecording || !selected || !pos) {
		return null;
	}

	return (
		<SidebarPanel title="Debug Stats" testId="profiler-debug-stats">
			<dl class="commit-info-list">
				<dt class="commit-info-title">id:</dt>
				<dd class="commit-info-value">{selected.id}</dd>
				<br />
				<dt class="commit-info-title">parentId:</dt>
				<dd class="commit-info-value">{selected.parent}</dd>
				<br />
				<dt class="commit-info-title">rootId:</dt>
				<dd class="commit-info-value">{getRoot(commit.nodes, selected.id)}</dd>
				<br />
				<dt class="commit-info-title">tree:</dt>
				<dd class="commit-info-value">
					<TimeRange from={pos.x} to={pos.x + pos.width} />
				</dd>
				<br />
				<dt class="commit-info-title">real:</dt>
				<dd class="commit-info-value">
					<TimeRange from={selected.startTime} to={selected.endTime} />
				</dd>
			</dl>
		</SidebarPanel>
	);
}
