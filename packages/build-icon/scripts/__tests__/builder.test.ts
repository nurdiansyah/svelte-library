import fs from "fs";
import path from "path";
import temp from "temp";
import { RENAME_FILTER_MUI, main, getComponentName } from "../builder";

const DISABLE_LOG = true;

// To cut down on test time, use fixtures instead of node_modules
// const MUI_ICONS_ROOT = path.join(__dirname, '../node_modules/material-design-icons/');
const ICONS_ROOT = path.join(__dirname, "./");
const SVG_DIR = path.join(ICONS_ROOT, "svg");

describe("builder", () => {
  beforeEach(() => {
    // Automatically track and cleanup files at exit
    temp.track();
  });

  describe("#getComponentName", () => {
    it("should change capitalize dashes", () => {
      expect(getComponentName("hi-world")).toStrictEqual("HiWorld");
    });

    it("should capitalize based on environment path.sep", () => {
      expect(getComponentName(`this${path.sep}dir`)).toStrictEqual("ThisDir");
    });
  });

  it("should have icons to test with", () => {
    expect(fs.lstatSync(SVG_DIR).isDirectory()).toBeTruthy();
  });

  it("should have main", () => {
    expect(main).not.toBeUndefined();
  });

  describe("--output-dir", () => {
    const options = {
      svgDir: SVG_DIR,
      innerPath: "/svg/production/",
      glob: "/**/production/*_24px.svg",
      renameFilter: RENAME_FILTER_MUI,
      disableLog: DISABLE_LOG,
      outputDir: ""
    };

    beforeEach(() => {
      options.outputDir = temp.mkdirSync();
    });

    afterEach(() => {
      temp.cleanupSync();
    });

    it("script outputs to directory", async () => {
      await main(options);
      expect(fs.lstatSync(options.outputDir).isDirectory()).toBeTruthy();
    });
  });

  describe("Template rendering", () => {
    const options = {
      svgDir: SVG_DIR,
      innerPath: "/svg/",
      glob: "/*_24px.svg",
      renameFilter: RENAME_FILTER_MUI,
      disableLog: DISABLE_LOG,
      outputDir: ""
    };

    beforeEach(() => {
      options.outputDir = temp.mkdirSync();
    });

    afterEach(() => {
      temp.cleanupSync();
    });

    it("should produce the expected output", async () => {
      await main(options);
      expect(fs.lstatSync(options.outputDir).isDirectory()).toBeTruthy();

      const cases = ["Accessibility.svelte", "StarRounded.svelte", "QueueMusicOutlined.svelte", "AccessAlarms.svelte"];

      cases.forEach((name) => {
        const actual = fs.readFileSync(path.join(options.outputDir, name), { encoding: "utf8" });
        // Update the snapshots
        // fs.writeFileSync(path.join(MUI_ICONS_ROOT, 'expected', name), actual, { encoding: 'utf8' });

        const expected = fs.readFileSync(path.join(ICONS_ROOT, "expected", name), {
          encoding: "utf8"
        });

        expect(actual).toEqual(expected);
      });
    });
  });
});
