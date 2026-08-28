import { Command } from "@oclif/command";
import { CliUx } from "@oclif/core";
import { network } from "../../storage/networks";
import { green } from "colors";

export default class SetEnpoint extends Command {
  static description = "Restore default enpoint";

  static args = [
    {
      name: "endpoint",
      required: false,
      description: "Restore default endpoints",
    },
  ];

  async run() {
    network.resetEndpoint();
    CliUx.ux.log(`${green("Success:")} Endpoints restored to default`);
  }

  async catch(e: Error) {
    CliUx.ux.error(e);
  }
}
