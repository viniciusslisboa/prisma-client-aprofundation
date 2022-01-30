const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: [{ level: "query", emit: "event" }],
  rejectOnNotFound: {
    findUnique: {
      User: (err) => new Error("User error. " + err),
    },
  },
});

prisma.$on("query", (e) => {
  console.log(`timeout: ${e.duration}ms`);
});

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      id: "ckz0kuett0006i1i0tend200i",
    },
  });
  console.log(user || null);
}
main();
