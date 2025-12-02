module.exports = {
  apps: [
    {
      name: 'kirkstagram',
      script: './instafix',
      args: '-listen 0.0.0.0:3200',
      cwd: '/home/debian/home/kirkstagram',
      interpreter: 'none',
      instances: 1,
      autorestart: true,
      // Separate log files for different log levels
      log_file: '/home/debian/home/kirkstagram/logs/combined.log',
      out_file: '/home/debian/home/kirkstagram/logs/out.log',
      error_file: '/home/debian/home/kirkstagram/logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      // Disable PM2's default log capture for custom handling
      disable_logs: false,

    }
  ]
};
