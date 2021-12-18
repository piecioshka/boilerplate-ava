import test from "ava";
import { Example } from "../src/example";

let o;

test.beforeEach(() => {
  o = new Example();
});

test("sync", (t) => {
  t.is(o.sync(), "sync");
});

test.cb("asyncCallback", (t) => {
  o.asyncCallback((value) => {
    t.is(value, "asyncCallback");
    t.end();
  });
});

test("asyncPromise", async (t) => {
  const value = await o.asyncPromise();
  t.is(value, "asyncPromise");
});
